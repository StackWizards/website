const slackUrl = process.env.SLACK_WEBHOOK_URL;

export default async function handler(req, res) {

  if (!slackUrl) {
    console.error('Missing SLACK_WEBHOOK_URL environment variable')
    return res.redirect(302,'/error');
  }

  const { firstName, lastName, email, message, mailingList, budget, website } = req.body;

  if (!firstName || !lastName || !email || !message) {
    console.error('Missing required fields on website submission', req.body)
    const example = {
      "blocks": [
        {
          "type": "section",
          "text": {
            "type": "mrkdwn",
            "text": "*New inbound lead to the website -- FAILED*"
          }
        },
        {
          "type": "divider"
        },
        {
          "type": "section",
          "text": {
            "type": "mrkdwn",
            "text": `*The following body was sent to the api endpoint and failed validation*\n ${req.body}`
          }
        }
      ]
    }
    // post to slack
    await fetch(slackUrl, {
      method: 'POST',
      body: JSON.stringify(example),
    })
    return res.redirect(302,'/error');
  }

  const example = {
    "blocks": [
      {
        "type": "section",
        "text": {
          "type": "mrkdwn",
          "text": "*New inbound lead to the website*"
        }
      },
      {
        "type": "divider"
      },
      {
        "type": "section",
        "text": {
          "type": "mrkdwn",
          "text": `*Name*\n ${firstName} ${lastName} - ${email}`
        }
      },
      {
        "type": "section",
        "text": {
          "type": "mrkdwn",
          "text": `*Info*\n ${message} \n\n *Budget*\n ${budget} \n\n *Website*\n ${website} \n\n *Mailing List*\n ${mailingList}`
        }
      },
    ]
  }

  // post to slack
  await fetch(slackUrl, {
    method: 'POST',
    body: JSON.stringify(example),
  })


  return res.redirect(302,'/contact/success');
}

import os
from PIL import Image

def compress_images(folder_path):
    for filename in os.listdir(folder_path):
        if filename.endswith(".png") or filename.endswith(".jpg") or filename.endswith(".jpeg"):
            file_path = os.path.join(folder_path, filename)
            try:
                image = Image.open(file_path)
                image.save(file_path, optimize=True, quality=85)  # Adjust quality as desired
                print(f"Compressed: {filename}")
            except Exception as e:
                print(f"Error compressing {filename}: {str(e)}")

# Provide the path to the folder containing the images
folder_path = "public/images/gallery"

# Call the function to compress the images
compress_images(folder_path)
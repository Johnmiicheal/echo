# ECHO Project

An OpenAI Whisper-based full-stack project to transcribe audio and video files using React & Django.


## Demo
![image](https://github.com/Johnmiicheal/echo/assets/69642932/ff8e68c4-0be1-4aa0-b448-f24118ae0cf7)

![image](https://github.com/Johnmiicheal/echo/assets/69642932/d150cbc0-6d30-48c8-82dd-2c0b2bbb7cd8)
![image](https://github.com/Johnmiicheal/echo/assets/69642932/b56415f4-8667-4cbb-ac0f-1988f61d4048)



## Installation

You need the latest versions of pipenv and node to setup this project.

- First clone the repository `git clone https://github.com/johnmiicheal/echo` and navigate to the project's folder
`cd echo`
- Install the dependencies of both the client and server.
- Run both the client and server separately
- Go to http//localhost:3000 to upload and transcribe your media files.


1- To install the server's dependencies, in the terminal run the following:

** with pipenv **
```bash
  cd api
  pipenv install
  pipenv shell 
  pipenv run python manage.py makemigrations
  pipenv run python manage.py migrate
  pipenv run server
```

** with pip **
```bash
  cd api
  pip install -r requirements.txt
  python manage.py makemigrations
  python manage.py migrate
  python manage.py runserver
 ```
- Navigate to navigate to http://localhost:8000 to check if the server was setup successfully.

2- To run the client, execute the following commands:

```bash
  cd client
  yarn install
  touch .env.local
  yarn dev
```

You need to have the following env variables in your .env.local file:
```
NEXT_PUBLIC_ROOT_URL=http://127.0.0.1:8000
NEXT_PUBLIC_ALL_FILES_URL=http://127.0.0.1:8000/api/transcription/files/
NEXT_PUBLIC_FILE_UPLOAD_URL=http://127.0.0.1:8000/api/transcription/files/
NEXT_PUBLIC_TRANSCRIPTION_URL=ws://127.0.0.1:8000/ws/transcribe
OPENAPI=sk-youropenaiapikeygoeshere
```

Adjust these if your going to deploy to any remote server.

- Navigate to http://localhost:3000/ to see if the client is working and the file upload section is visible.
- Since this project uses websockets to send realtime-messages between the client and server, you need to see if the console of the client is showing connected, which means both client and server can exchange messages.


3- Select a video or audio file to upload The transcripts will be extracted and displayed on the page.

4- You can also view all your uploaded video and audio files and see their transcriptions. Their is an additional export button that allows you to download a JSON file with all their information.

- Currently tested for only .mp3 files 
- Additional Notes Make sure ffmpeg is installed on your machine and available on your system's PATH

## System Design
![image](https://github.com/Johnmiicheal/echo/assets/69642932/f1366efb-d1ac-433f-ae42-67ecccd3d153)


## License

[MIT](https://choosealicense.com/licenses/mit/)


## Contributing

Contributions are always welcome!

Open a PR or an issue for extra features and bug fixes.

## Authors

- [@ali-h-kudeir](https://www.github.com/ali-h-kudeir)
- [@johnmiicheal](https://www.github.com/johnmiicheal)


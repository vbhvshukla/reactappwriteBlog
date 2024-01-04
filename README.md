Tech Stack:  
FrontEnd -> REACT
Backend As a Service -> AppWrite

Steps && Explaination ->
0) Installed the dependencies
1) We made .env file for the environment variables
2) The .env file contains all the variables that are to be confidential and the .env.sample contains only the variables declared in .env without the value.
3) Production ready approach is we made a conf.js in conf folder through which we exported these .env values.
4) Now, we must code in such way that if we want to switch to another platform ( from appwrite to other) we make use
of SERVICES which interact with firebase or appwrite or any other.
5) We put every thing of the appwrite in the appwrite folder and making a auth service.
6) For the auth.js Signup creating account logging in we have used the Official appwrite documentation.
7) We move on to creating config in appwrite folder.
8) In the config.js we have created database and bucket and the various methods createPost , updatePost etc using the official docs of appwrite.
9) 
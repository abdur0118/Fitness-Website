# Fitness-Website
A website to track fitness goals, connect with people and manage data like tracking calories and footsteps\
There are 3 kinds of logins:\
1.Member(the actual customer of the gym)\
2.Trainer(one who works on the fitness aspects)\
3.Admin(one who manages the gym)\
A group of members are associated with specific trainers and trainers can view part of the fitness data of assigned members.\
Features:
## 1.Track and record fitness parameters in form of graphs.
![member home page](https://user-images.githubusercontent.com/93126982/205687071-0db39a5d-1699-430b-9938-a4cc1ba03a54.png)
### MEMBER VIEW
![member progress as viewed through trainer](https://user-images.githubusercontent.com/93126982/205687097-88c67cfe-6e50-499b-be9a-04b0aa1b751a.png)
### TRAINER VIEW
## 2.Set tasks
![member tasks page](https://user-images.githubusercontent.com/93126982/205688085-22689d9b-60e1-4af6-b185-945e7b790d3c.png)
### MEMBER VIEW
![trainer assigning tasks to the associated member](https://user-images.githubusercontent.com/93126982/205688115-091616a3-0af4-4237-b7cc-c5393ca4644b.png)
### TRAINER VIEW
## 3.Read latest fitness articles.\
![discussion topics](https://user-images.githubusercontent.com/93126982/205688339-f6963a6f-60a3-496d-bfb6-9e6a6567cf1c.png)
### NEWS ITEMS
## 4.Connect and chat with people.\ 
![member chat screen](https://user-images.githubusercontent.com/93126982/205688499-394e488c-98ef-485b-9dc6-2a2c17126849.png)
### CHATTING FEATURE
## 5.Admin panel.
![page showing due users](https://user-images.githubusercontent.com/93126982/205688566-a692c6b8-f17f-400f-8f2b-f2e08433fe5e.png)
## Improvements:
The file structure of the system can be improved by modularizing the chatting system seperately\
No authentications(JWT can be implemented)\
Lots of code is repeated in the views part\
Dynamic view of the pages are done in plain javascript, can be replaced with frameworks like React\

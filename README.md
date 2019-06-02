# Welcome to StackSlash!

# Tasks

StackSlash stores your tasks in your slack, which means all your tasks are automatically saved in a database and are accessible **remotely!**

## Create tasks for specific channels

You can create tasks in a particular channel and we make sure its accessible to only members of that channel. ***View and Edit rights*** are only allowed for the members of that channel

## Switch to another channel

You can switch from one to another by clicking a list item on the left.


## List of commands
|  Command              |Description                          |Usage                         |
|----------------|-------------------------------|-----------------------------|
|/addtodo todoname|`Adds a todo item to the list for that channel`            |`/addtodo buy milk`            |
|/listtodo          |`Lists out all the todo tasks for that channel`            |`/listtodo`            |
|/marktodo todoname          |`removes the todo item with name todoname`|`marktodo buy milk`|

## Delete a Todo

You can delete a todo by typing the **/marktodo todoname** button in the file explorer. The file will be moved into the **Trash** folder and automatically deleted after 7 days of inactivity. (Trashing the todo is in beta currently)


# Synchronization

Synchronization is one of the biggest features of StackSlash. It enables you to synchronize any task in your workspace with other tasks stored in your **Google Drive**, your **Dropbox** and your **GitHub** accounts. This allows you to keep writing on other devices, collaborate with people you share the task with, integrate easily into your workflow... The synchronization mechanism takes place every minute in the background, downloading, merging, and uploading file modifications.

There are two types of synchronization and they can complement each other:

- The workspace synchronization will sync all your files, folders and settings automatically. This will allow you to fetch your workspace on any other device.
	> To start syncing your workspace, just sign in with Google in the menu.

- The file synchronization will keep one file of the workspace synced with one or multiple files in **Google Drive**, **Dropbox** or **GitHub**.
	> Before starting to sync files, you must link an account in the **Synchronize** sub-menu.

## Project Description
This project contains two branches - master and no-webhook
These are two different approaches in which response can be sent to slack channels.

**Webhook Approach**

    function  postSlackMessage(body,  req)  {
    	request.post({
    			url:  req.body.response_url,
    			json:  body,
    			headers:  {
    				"Content-Type":  "application/json"
    			}
    		},function(error,  response,  body)  {
    				console.log(body);
    		}
    	)}
    }
   This approach caches the `response_url` *`[webhook]`* coming in the request and sends the response at that `response_url`
   **The advantage of using webhooks can be seen here** *https://api.slack.com/incoming-webhooks*

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

## Project Description
This project contains three branches - 
*`*remotes/origin/master *remotes/origin/sr/no-web-hooks *remotes/origin/with-webhooks`*
 
Master contains the current code deployed on the aws server
no-web-hook shows the approach of sending slack messages without using web hooks
with-webhooks shows the approach of sending slack messages using webhooks

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

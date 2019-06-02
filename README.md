
# Welcome to StackEdit!

Hi! I'm your first Markdown file in **StackEdit**. If you want to learn about StackEdit, you can read me. If you want to play with Markdown, you can edit me. Once you have finished with me, you can create new files by opening the **file explorer** on the left corner of the navigation bar.


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

## Open a file

You can open a file from **Google Drive**, **Dropbox** or **GitHub** by opening the **Synchronize** sub-menu and clicking **Open from**. Once opened in the workspace, any modification in the file will be automatically synced.

## Save a file

You can save any file of the workspace to **Google Drive**, **Dropbox** or **GitHub** by opening the **Synchronize** sub-menu and clicking **Save on**. Even if a file in the workspace is already synced, you can save it to another location. StackEdit can sync one file with multiple locations and accounts.

## Synchronize a file [Concept]
***Note*** - **This feature is currently unavailable**

Once your file is linked to a synchronized location, StackEdit will periodically synchronize it by downloading/uploading any modification. A merge will be performed if necessary and conflicts will be resolved.

If you just have modified your file and you want to force syncing, click the **Synchronize now** button in the navigation bar.

> **Note:** The **Synchronize now** button is disabled if you have no file to synchronize.

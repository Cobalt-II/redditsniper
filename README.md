# redditsniper
2 puppeteer bots for Reddit for registering accounts and either upvoting or downvoting posts.
How to use:
Install Puppeteer with npm install puppeteer. 
Enter your password into password.js.
From there execute the registerbot after you've filled in the email variable for the registerbot. Note: the registerbot is almost fully automatic except for the captcha at the end, which you need to manually solve. The console will log the name of your new account. Make sure to copy these names.
From there, enter the names into the sniperbot accounts variable. Enter the link of the post you want to snipe into the link variable. Additionally, at the bottom of the bot, set k(accounts[count], 0); to either keep it as 0 (downvote) or 1 (upvote).
From there just run the bot.

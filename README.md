## Features of this YouTube clone

1. Sidebar

Sidebar which can be hide and show on click on hamburger icon.

2. Search bar 

In Search bar user can search for any video.

3. AutoSuggestion in search bar. 

Whenever user enters any character, we will call an suggestions api, and then show the suggestions results in dropdown list.

4. Debouncing

To reduce the number of api calls, we have implemented debouncing in suggestions api call.

By debouncing, we will only call suggestions api, when user stops typing in search bar.

5. Caching

If user clears characters in search bar one by one, that time we are not calling api. Instead, we are showing the suggestions which are saved in redux store.

We will only call suggestions api on user back press, when we don't have the result of the word in redux store.

6. Video lists

We have showed the list of available videos to user.

7. Watch Page

When user clicks on any video, that time we are showing that particular video watch page.

8. Comments

In watch page, user can see all comments.



### Impelemting Catching for efficient search result

When user is clearing out text in search field, that time you should not call the api again.
Just show the search response from saved search results.

For this, i will store search results in redux store in the form of Map or Set.

Because, searching in a map or set takes O(n) time.

### n level comments

There can be n level comments in comments section. 
To show n level comments, we will use recursion to display n level comments.

### Live chat

#### Challenges

1. get live data
2. update ui with live data
3. give user a better user experience

We can update live data in two ways:

1. Web socket

Web socket is a two way connection, handshake between server and client ui.

2. Api polling

UI keep polling data after some interval.

Gmail is an example of API polling, because, in gmail, it is ohk, if user receives a mail after 10 seconds.

In stockes, cryptocurrency trading platforms, we need to show real time stocks data, because in milliseconds, an stock can go up and down, and that can impact on the customer or trader balance.

In live chat application, we always need to have real time messaging. That is implemented using web socket.

In live sports commentry, data is updated using api polling.

after a fixed interval, ui request api to backend, and updated data is show to user.


#### Why live video streaming page is not getting fridge when there is live chat is happening?

Because youtube starts deleting messages if they cross a certain limit.

After crossing that limit, youtube keeps deleting 100th or 200th messages from latest.

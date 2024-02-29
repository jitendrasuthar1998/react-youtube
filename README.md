### Impelemting Catching for effienct search result

When user is clearing out text in search field, that time you should not call the api again.
Just show the search response from saved search results.

For this, i will store search results in redux store in the form of Map or Set.

Because, searching in a map or set takes O(n) time.


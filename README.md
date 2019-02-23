# Server

*WORK IN PROGRESS*

This is a Apollo GraphQL server that returns songs based on a search query.

There are currently two functions, as outlined below:

## Songs From Notes

This allows you to search for a string of notes, i.e. `C C G` (Twinkle Twinkle Little Star)

Use it like this:

```graphql
query SongsFromNotes {
  songsFromNotes (notes: "C C G") {
    name
  }
}
```

returns:

```json
{
  "data": {
    "songsFromNotes": [
      {
        "name": "Twinkle Twinkle Little Star"
      }
    ]
  }
}
```

## Songs From Name

Simple name search - not fuzzy, it has to be exact and complete.

```graphql
query SongsFromName {
  songsFromName (name: "Twinkle Twinkle Little Star") {
    name
  }
}
```

returns:
```json
{
  "data": {
    "songsFromName": [
      {
        "name": "Twinkle Twinkle Little Star"
      }
    ]
  }
}
```
(which seems a bit pointless!)

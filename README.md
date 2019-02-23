# Server

**WORK IN PROGRESS**

This is a Apollo GraphQL server that returns songs based on a search query.

## Adding Songs

Songs are from MIDI and converted to JSON (using the [MIDI to JSON converter](https://www.visipiano.com/midi-to-json-converter/)). Add it to the `songs` array in `./db/music.js`.

## Schema

There are currently two functions, as outlined below:

### Songs From Notes

This allows you to search for a string of notes, i.e. `C C G` (Twinkle Twinkle Little Star)

Use it like this:

```graphql
query SongsFromNotes {
  songsFromNotes (notes: "G G G D#") {
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
        "name": "Symphony No. 5 in C Minor, Allegro con brio - Beethoven"
      }
    ]
  }
}
```

### Songs From Name

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

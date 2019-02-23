const musicList = require('./db/music.js')

const resolvers = {
  Query: {
    songsFromNotes: (parent, args, context, info) => {
      return musicList
        .filter(song => {
          return song.notesStringArray.some(notesString => notesString.includes(args.notes))
        })
      },
    songsFromName: (parent, args, context, info) => {
      return musicList
        .filter(song => song.header.name === args.name)
        .map(song => song.header)
    },
  }
}

module.exports = resolvers
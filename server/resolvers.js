const musicList = require('./db/music.js')

const resolvers = {
  Query: {
    songsFromNotes: (parent, args, context, info) => {
      musicList
        .filter(song => {
          const SongNoteNames = song.notes.map(note => note.name.slice(0, 1)).join(' ')
          return SongNoteNames.includes(args.notes) // 'A B C'.includes('B C')?
        })
        .map(song => song.header)
    },
    songsFromName: (parent, args, context, info) => {
      return musicList
        .filter(song => song.header.name === args.name)
        .map(song => song.header)
    },
  }
}

module.exports = resolvers
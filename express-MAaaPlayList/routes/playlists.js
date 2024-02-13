const express = require('express')
const router = express.Router()
const playlistsCtrl = require('../controllers/playlists')

router.get('/playlists', playlistsCtrl.create)
router.post('/new', playlistsCtrl.newPlayList)
router.get('/new', playlistsCtrl.playlistIndex)
router.post('/view/:id',playlistsCtrl.songsDetails)
router.get('/view/:id',playlistsCtrl.songsDetails)
router.delete('/:id', playlistsCtrl.deletePlaylist)
router.post('/:id', playlistsCtrl.showUpdate)
router.put('/:id', playlistsCtrl.updatePlaylist)
router.post('/view/:id', playlistsCtrl.viewPlaylist)
router.get('/view/:id', playlistsCtrl.viewPlaylist)

router.delete('/:id/:songId', playlistsCtrl.removeSong)
router.post('/songs/:id/addToPlayList', playlistsCtrl.addToPlaylist)
module.exports = router

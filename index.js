var eejs = require('ep_etherpad-lite/node/eejs')
  , padManager = require('ep_etherpad-lite/node/db/PadManager')
  , api = require('ep_etherpad-lite/node/db/API')
  , express = require('ep_etherpad-lite/node_modules/express');

exports.expressCreateServer = function (hook_name, args, cb) {
  args.app.get('/list', async function(req, res) {
    var pads = await padManager.listAllPads();
    var render_args = {
      pads: pads.padIDs
    };
    res.send( eejs.require('ep_padlist2/templates/pads.html', render_args) );
  });
  return cb();
}

exports.eejsBlock_indexWrapper = function(hookName, args, cb) {
  args.content = args.content +
      '<div style="text-align:center; margin-top:2em;"><a href="list">All Pads</a></div>';
  return cb();
}

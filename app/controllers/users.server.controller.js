var User = require('mongoose').model('User');
exports.create = function(req, res, next) {
  var user = new User(req.body);
  user.save(function(err) {
    if (err) {
      return next(err);
    } else {
      res.json(user);
    }
  });
};

exports.list = function(req, res, next) {
  User.find({}, function(err, users) {
    if (err) {
      return next(err);
    } else {
      res.json(users);
    }
  });
};



exports.read = function(req, res) {
  res.json(req.user);
};
exports.userByID = function(req, res, next, id) {
  User.findOne({
    _id: id
  }, function(err, user) {
    if (err) {
      return next(err);
    } else {
      req.user = user;
      next();
    }
  });
};

exports.update = function(req, res, next) {
  User.findByIdAndUpdate(req.user.id, req.body, function(err, user) {
    if (err) {
      return next(err);
    } else {
      res.json(user);
    }
  });
};
exports.createBadge = function(req,res){
  User.findById(req.params.userId, function (err, user){

   if(err)console.log(err);
      var userBadgeAmateur = req.body.amateur;
          userBadgeRookie = req.body.rookie;
          userBadgeSoldier = req.body.soldier;
          userBadgeWarlord = req.body.warlord;
      
      console.log(user);
      if(user.amateur[0]<5){
        user.amateur[0]+=1;
      }
      else if(user.rookie[0]<5){
        user.rookie[0]+=1;
      }
      else if(user.soldier[0]<5){
        user.soldier[0]+=1;
      }
      else if(user.warlord[0] < 5){
        user.warlord[0]+=1;
      }
      // for(var i=0;i<=40 ;i++){
      //   if(user.amateur[i] <= 5)
      //       user.amateur[i] += 1;
      //     if(user.amateur[i]>=5)
      //       user.rookie[i]+=1;
      //     if(user.rookie[i]>=5)
      //       user.soldier[i]+=1;
      //     if(user.soldier[i]>=5)
      //       user.warlord[i]+=1;

      user.markModified('amateur');
      user.markModified('rookie');
      user.markModified('soldier');
      user.markModified('warlord');

      user.save();
      res.json(user);
  });
};
exports.delete = function(req, res, next) {
  req.user.remove(function(err) {
    if (err) {
      return next(err);
    } else {
      res.json(req.user);
    }
  });
};
function addAmateurBadge(){
 

}
function addRookieBadge(){

}
function addSoldierBadge(){

}
function addWarLordBadge(){

}


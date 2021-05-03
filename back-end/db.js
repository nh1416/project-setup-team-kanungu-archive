const mongoose = require('mongoose')
const URLSlugs = require('mongoose-url-slugs')

//role
const Role = mongoose.model(
    "Role",
    new mongoose.Schema({
      name: String
    })
  );  

// user schema
const userSchema = new mongoose.Schema({
    username: { type: String, required: true, unique : true},
    password: { type: String, required: true},
    posts: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Recipe' }],
    email: { type: String, required: true },
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    bio: { type: String, required: false },
    followers: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }],
    following: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }],
    likedPosts: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Recipe' }],
    profileImage: { type: String, required: true },
    text:{type:String},
    roles: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Role"
      }
    ]
    
})

userSchema.plugin(URLSlugs('username', { field: 'slug' }))

// recipe schema
<<<<<<< HEAD

=======
>>>>>>> 70d406a7f1e4da29b60ee6d79955b7189ff14f71
const recipeSchema = new mongoose.Schema({
    author: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    title: { type: String, required: true },
    images: { type: [String], required: true },
    posted: { type: Date, required: true },
    cuisine: {type: String, required:true},
    difficulty: {type: String, required:true},
    ingredients: [String],
    instructions: {type: String, required: true},
    likes: { type: Number, required: true },
    comments:[{type: mongoose.Schema.Types.ObjectId,ref: 'Comment'}]
   
})
<<<<<<< HEAD
/*
const recipeSchema = new mongoose.Schema({
    title: {type: String, required: true},
    ingredients: {type: String, required: true},
    cuisine: {type:String, required: true },
    difficulty: {type: String,  required: true},
    instructions: {type: String,  required: true}
});
*/
=======

// const recipeSchema = new mongoose.Schema({
//     title: {type: String, required: true},
//     ingredients: {type: String, required: true},
//     cuisine: {type:String, required: true },
//     difficulty: {type: String,  required: true},
//     instructions: {type: String,  required: true}
// });
>>>>>>> 70d406a7f1e4da29b60ee6d79955b7189ff14f71
const commentSchema = new mongoose.Schema({
    by: {type: mongoose.Schema.Types.ObjectId, ref:'User'},
    text: {type: String,required:true},
    posted: {type:Date, required:true}
})

recipeSchema.plugin(URLSlugs('author.username title', { field: 'slug' }))

const db = {};
db.mongoose = mongoose;

db.user = userSchema;
db.role = Role;

db.ROLES = ["user", "admin", "moderator"];

module.exports = {
    db: db,
    role: db.ROLES,
    Role,
    // Roles: mongoose.model('Roles', roleSchema),
    User:  mongoose.model('User',userSchema),
    Recipe: mongoose.model('Recipe',recipeSchema),
    Comment: mongoose.model('Comment',commentSchema)
}
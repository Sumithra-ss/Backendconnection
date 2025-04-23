const mongoose=require('mongoose')
const userSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true,
        
    },
    email:{
        type:String
    },
    password:{
        type:String,
        required:true,

    },
    profilePicture:{
        type:String,
        default:'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAALsAAACUCAMAAAD8tKi7AAAAY1BMVEX///8AAABdXV38/Pzz8/MVFRUEBAT4+PipqamJiYlaWlri4uKTk5Pd3d19fX3m5uZjY2ODg4PAwMA6OjocHBzs7Oy0tLTHx8dQUFAQEBCdnZ1qamrNzc0nJydJSUkvLy9zc3O0tKRIAAADhklEQVR4nO2a25KiMBBAiYncUeQiyij6/185SdAZDSDJLps0W31qHqbQKg9tp2068TwEQRAEQRAEQRAEQRAEQRAEMYLKv/dLHCcuZjwt2SVMoyhKw0vQXx/eETSkIs3ajvzStQm/Bt1cwooNUfkqGGx7KqPe7Abmgt0FsrpckUF7HVUn5NYGHtwly8Vo5xN/VJ1fjync5Uq97MYlx93FLZUJXPnsNJEvT/lT5lpxDJHI+2F9UclrgOWGGwWHWXVCogBe0nOfY58Xn7KGv1zACzz16opM1ZjfjPfJlYGLu+dFGhkjSF2LDklumu63vWvVAa2mOvFD16oqLNd1J3ngWlahuc2s05+wk/LiWlYhPGu6E7IFljSBbpURRLCSpr5rh90nO+Za943kYxemkMOqklk3r/zDKXGt+0ZWGrh3sDrhVbub5PsGVr7XX3P97wtftWvdN9j4YGOcA6waSVMD99a1rUIxNZYZci1cyyoY/DjFsNKdo/Og3RO5Vh1w2WqqV9BaYP7sH4sxwEydFG/IXbsOoF42Pc57lSewflQFVAwK5uPukxTefIZTl/MpQzqIQz1OU8qsmboB8a2UjWvJCehxOx15mU/V0bXjNOF2MuziMmB1nshF9aGfBNcMKDz3+F5u4Plv3gCcor6xT89kUCxFqrfg2hiVgNLs/hLw5z3cE3h7BirSr05Pry3x9ZTWHsyyriIcg0u7u2/iU7y571pxomAtm/IPgjrJkhrW/M6YNQW855Ejq0oVlTW7g8cgM2TFAfdlMB1cS6pQloSHuLxW2zmqa5kfwj1zHXf6OMpTF6KFMaJKm7o/5+SqDMm0zcKN9hD1hXMeJk5rEPVY2P20XfrId/vdkbks/4ncEfb9+eGG6i4fbN1sPMlMD0Ij4zFCmfF2ex6R6kx/BDlNxDzb1Z4HqzbZLpiAJ87O+nmaZdTloj1Yll8oYXqiwF7ayA/6+2X6i5jaWKqV4mMa3Wn7PL6YyNsKvPgU3QNWepRWvB/y2gesNLF4oiZbNuxWz7+ZHPTRI7VVaIwOy+gR2wr8cXF1crY03eY/S3/SsX/Ct3WGzOisjC6lne2/Yumoi7ifrWxE0aWLe4+VEk+XaCCHHGwUyaAzfTzVYmNjsTLTgYYeNxtTJ/ZP1AlZrbu/YneyYneMO7pDde/izfLE8co3MxEEQRAEQRAEQRAEQRAEQRDkP+EbXVEoPqbFNPkAAAAASUVORK5CYII='
    },
    
    role:{
        type:String,
        enum:['admin','user'],
        default:'user'
    },
    status:{
        type:String,
         default:'Active'
    },
    posts: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'tutorsdetail',
    }],
    
},{timestamps:true})
module.exports=mongoose.model('user',userSchema,'users')
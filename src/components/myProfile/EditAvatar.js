import React, { Component } from 'react'
import axios from 'axios'

const options = {
  headers: {
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTQyOSwibmFtZSI6IkRlYWRQb29sIiwiZW1haWwiOiJEZWFkUG9vbEBzdHVkLm5vcm9mZi5ubyIsImF2YXRhciI6Imh0dHBzOi8vdW5zcGxhc2guY29tL3Bob3Rvcy9rTDRjb1FIVmpfQSIsImJhbm5lciI6Imh0dHBzOi8vdW5zcGxhc2guY29tL3Bob3Rvcy9rTDRjb1FIVmpfQSIsImlhdCI6MTY4MTY2MTE3OX0.2kdMyU3MB1etTgrtuVzGbuJoTd7nlkZuzDESTWY6jLQ',
  },
}
 

class ChangeAvatar extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
        avatar:'',
      }
    }


    changeHandler=(e)=> {
        this.setState({[e.target.name]: e.target.value})
    }
    submitHandler = e => {
        e.preventDefault()
        console.log(this.state, options)
        axios.post('https://api.noroff.dev/api/v1/social/profiles/DeadPool/media', this.state, options)
        .then(response=>{
          console.log(response)
        })
        .catch(error=>{
          console.log(error)
        })
    }

    
    changeHandler=(e)=> {
      this.setState({[e.target.name]: e.target.value})
  }
  submitHandler = e => {
      e.preventDefault()
      console.log(this.state, options)
      axios.put('https://api.noroff.dev/api/v1/social/profiles/DeadPool/media', this.state, options)
      .then(response=>{
        console.log(response)
      })
      .catch(error=>{
        console.log(error)
      })
  }
  render() {
    const {avatar} = this.state;
    return (
      <div>
        <form onSubmit={this.submitHandler} id="my-form">
            <div>
                <input type="text" className="avatar-link" placeholder="Avatar url" name="avatar" value={avatar}onChange={this.changeHandler}  style={{backgroundColor:'#212529', color:'#fff', borderRadius:'8px', border:'2px solid #fff'}}/>
            </div>
            <button type="submit" className="edit-avatar">Update</button>
        </form>
      </div>
    )
  }
}

export default ChangeAvatar;
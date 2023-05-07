import React, { Component } from 'react'
import axios from 'axios'

const options = {
  headers: {
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTQyOSwibmFtZSI6IkRlYWRQb29sIiwiZW1haWwiOiJEZWFkUG9vbEBzdHVkLm5vcm9mZi5ubyIsImF2YXRhciI6Imh0dHBzOi8vdW5zcGxhc2guY29tL3Bob3Rvcy9rTDRjb1FIVmpfQSIsImJhbm5lciI6Imh0dHBzOi8vdW5zcGxhc2guY29tL3Bob3Rvcy9rTDRjb1FIVmpfQSIsImlhdCI6MTY4MTY2MTE3OX0.2kdMyU3MB1etTgrtuVzGbuJoTd7nlkZuzDESTWY6jLQ',
  },
}
 
 

class UnfollowBatman extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         userId: '',
         title: '',
         body: '',
         follow:'',
         unfollow:''
        
      }
    }

    changeHandler=(e)=> {
        this.setState({[e.target.name]: e.target.value})
    }
    submitHandler = e => {
        e.preventDefault()
        console.log(this.state, options)
        axios.get('https://api.noroff.dev/api/v1/social/profiles/BruceWayne', this.state, options)
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
      axios.put(`https://api.noroff.dev/api/v1/social/profiles/BruceWayne/unfollow`, this.state, options)
      .then(response=>{
        console.log(response)
      })
      .then(response =>{
        alert("you have unfollowed")
      })
      .catch(error=>{
        console.log(error)
      })
  }

  render() {
    const {unfollow} = this.state;
    return (
      <div>
        <form onSubmit={this.submitHandler} id="my-form">
            <div>
                <button type="submit"  className="unfollow-button text-white" name="unfollowbutton" value={unfollow}onClick={this.changeHandler}>Unfollow</button>
            </div>
        </form>
      </div>
    )
  }
}

export default UnfollowBatman;
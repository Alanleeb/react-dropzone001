import React, { Component } from 'react';
import { Header } from 'semantic-ui-react';
import Dropzone from 'react-dropzone';

const imageMaxSize = 1000000000 //bytes
const acceptedFileTypes = 'image/x-png, image/png, image/jpg, image/jpeg, image/gif'
const acceptedFileTypesArray = acceptedFileTypes.split(",").map((item) => {return item.trim()})
class Home extends Component {
  constructor(props){
    super(props)
    this.state = {
      imgSrc: null
    }
  }

  verifyFile = (files) => {
    if (files && files.length > 0){
      const currentFile = files[0]
      const currentFileType = currentFile.type
      const currentFileSize = currentFile.size
      if (currentFileSize > imageMaxSize) {
        alert("this file is not allowed." + currentFileSize + " bytes is too large")
        return false
      }
      if (!acceptedFileTypesArray.includes(currentFileType)){
        alert("This file is not allowed. Only Images are allowed")
        return false
      }
      return true
    }
  }

  handleOnDrop = (files, rejectedFiles) => {
    if (rejectedFiles && rejectedFiles.length > 0){
      this.verifyFile(rejectedFiles)
    }

    if(files && files.length > 0){
      const isVerified= this.verifyFile(files)
      if(isVerified){
        const currentFile = files[0]
        const reader = new FileReader()
        reader.addEventListener("load", ()=>{
            console.log(reader.result)
            this.setState({
              imgSrc: reader.result
            })
        }, false) 

        reader.readAsDataURL(currentFile)
      }
    }
   
}

  render() {
    const {imgSrc} = this.state
    return (
      <div>
        <Header as='h1' textAlign='center'>Home Component</Header>
        {imgSrc !== null ? <img src={imgSrc} alt='preview of photo' height='350px' width='250px'/> : ''}
        <Dropzone onDrop={this.handleOnDrop} accept={acceptedFileTypes}>
          Add a File
        </Dropzone>
      </div>
    );
  }
}

export default Home;

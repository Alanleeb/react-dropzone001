import React, { Component } from 'react';
import { Header } from 'semantic-ui-react';
import Dropzone from 'react-dropzone';

class Home extends Component {

  handleOnDrop = (files, rejectedFiles) => {
    console.log(files)
    if (rejectedFiles && rejectedFiles.length > 0){
        const currentRejectedFile = rejectedFiles[0]
        const currentRejectedFileType = currentRejectedFile.type
        const currentRejectedFileSize = currentRejectedFile.size

      }
  

  if (files && files.length > 0) {
    const currentFile = files[0]
    const currentFileType = currentFile.type
    const currentFileSize = currentFile.size
  }
}

  render() {
    return (
      <div>
        <Header as='h1' textAlign='center'>Home Component</Header>
        <Dropzone onDrop={this.handleOnDrop} accept='image/*'>
          Add a File
        </Dropzone>
      </div>
    );
  }
}

export default Home;

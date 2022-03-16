api() {
    // read all entities
    fetch(this.state.url, {
      "method": "GET"
    })
    .then(response => response.json())
    .then(response => {
      this.setState( {
        loading: false,
        list : response.results
      } )
      this.RunWhenCreated();
    })
    .catch(err => { console.log(err);
    });
  }
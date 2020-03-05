import React from 'react'

class MovieAPI extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        data: [
          {
            title: 'The Phantom Menace',
            episode_id: 1,
            release_date: '1983-05-25'
          },
          {
            title: 'Return of the Jedi',
            episode_id: 2,
            release_date: '1983-05-25'
          },
          {
            title: 'Return of the Jedi',
            episode_id: 3,
            release_date: '1983-05-25'
          },
          {
            title: 'A New Hope',
            episode_id: 4,
            release_date: '1977-05-25'
          },
          {
            title: 'The Empire Strikes Back',
            episode_id: 5,
            release_date: '1980-05-17'
          },
          {
            title: 'Return of the Jedi',
            episode_id: 6,
            release_date: '1983-05-25'
          }
        ]
      };
    }

    componentDidMount() {
      //api stuff
    }

    render() {
      const { error, isLoaded, items } = this.state;
      if (error) {
        return <div>Error: {error.message}</div>;
      } else if (!isLoaded) {
        return <div>Loading...</div>;
      } else {
        return (
          <ul>
            {items.map(item => (
              <li key={item.name}>
                {item.name} {item.price}
              </li>
            ))}
          </ul>
        );
      }
    }

  }

  export default MovieAPI
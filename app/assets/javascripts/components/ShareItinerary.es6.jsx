class ShareItinerary extends React.Component {
  constructor() {
    super();
    this.state = {
      events: []
    }
  }

  componentDidMount(){
    let { trip_id } = this.props.itinerary;
    $.ajax({
      url: "/trips/" + trip_id + "/itineraries"
    }).done(function(response) {
      this.setState({
        events: response
      })
    }.bind(this));
  }


  render() {

      if (this.state.events.length === 0) {
        var displayItit = "hidden"
      } else {
        var displayItit = ""
      }

    return(
      <div className= { displayItit }>
        <h2>Itinerary</h2>
        <ul>
        {this.state.events.map((event, i ) =>
        <ShareEvent key={i} data={event}/>
        )}
        </ul>

      </div>
    )
  }
}
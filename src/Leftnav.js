import React from "react";

// Class that generates the left navigation bar with filter checkboxes.
export default class Leftnav extends React.Component {

    // Initialize a left navigation with all checkboxes unchecked
    constructor(props) {
        super(props);
        this.state = {
            'movies': false,
            'videoGames': false
        }
        this.changeMovies = this.changeMovies.bind(this);
        this.changeVideoGames = this.changeVideoGames.bind(this);
        this.filters = "01001";
    }

    // Listener methods for the checkboxes
    changeMovies(event) {
        this.setState({'movies': event.target.value});
    }
    changeVideoGames(event) {
        this.setState({'videoGames': event.target.value});
    }

    // Generate HTML for the left navigation
    render() {
        return (
            <div className="leftnav">
                <form>
                    <label>
                        Movies
                        <input
                            name="movies"
                            type="checkbox"
                            defaultChecked={true}
                            onChange={this.changeMovies} />
                    </label>
                    <br />
                    <label>
                        Video Games
                        <input
                            name="videoGames"
                            type="checkbox"
                            defaultChecked={true}
                            onChange={this.changeVideoGames} />
                    </label>
                </form>
            </div>
        );
    }
}
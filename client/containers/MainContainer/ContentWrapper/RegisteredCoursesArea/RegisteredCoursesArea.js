import React, {Component} from 'react';

import RegisteredCoursesTable from 'client/components/RegisteredCoursesTable/RegisteredCoursesTable'

import RegisteredCoursesStore from 'client/stores/RegisteredCoursesStore';

import 'client/containers/MainContainer/ContentWrapper/RegisteredCoursesArea/registered-courses-area.scss';

class RegisteredCoursesArea extends Component {
    constructor(props) {
        super(props);
        this.state = {
            courses: RegisteredCoursesStore.getAll()
        }
    }

    componentWillMount() {
        RegisteredCoursesStore.on("change", () => {
            this.setState({
                courses: RegisteredCoursesStore.getAll(),
            })
        });
    }

    getRegisteredCourseTable() {
        return (this.state.courses.length > 0) ? <RegisteredCoursesTable courses={this.state.courses} /> : null;
    }

    render() {
        return (
            <div className="registered-courses-area">
                <h2>Registered courses</h2>
                <hr />
                {this.getRegisteredCourseTable()}
            </div>
        )
    }
}

export default RegisteredCoursesArea;
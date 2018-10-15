import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { FlatList } from 'react-native';
import { employeesFetch } from '../actions';
import ListItem from './ListItem';

class EmployeeList extends Component {
    componentWillMount() {
        this.props.employeesFetch();
    }

    // componentWillReceiveProps()

    renderItem(employee) {
        return (<ListItem employee={employee} />);
    }
    render() {
        return (
            <FlatList
                data={this.props.employees}
                renderItem={this.renderItem.bind(this)}
                keyExtractor={(employee, index) => index.toString()}
            />
        );
    }
}

const mapStateToProps = state => {
    const employees = _.map(state.employees, (val, uid) => {
        return { ...val, uid }; // { shift: 'Monday', name: 'S', id: 'hlkhdlahj'};
    });
    return { employees };
};

export default connect(mapStateToProps, { employeesFetch })(EmployeeList);

// import React, { Component } from 'react';
// import { Text, TouchableWithoutFeedback, View } from 'react-native';
// import { Actions } from 'react-native-router-flux';
// import { CardSection } from './common';
 
// export default class ListItem extends Component {
//     onItemPress = () => Actions.employeeEdit({ employee: this.props.employee.item });
//     render() {
//         const { name } = this.props.employee.item;
 
//         return (
//             <TouchableWithoutFeedback onPress={this.onItemPress}>
//                 <View>
//                     <CardSection>
//                         <Text style={styles.titleStyle}>{name}</Text>
//                     </CardSection>
//                 </View>
//             </TouchableWithoutFeedback>
//         );
//     }
// }
 
// const styles = {
//     titleStyle: {
//         fontSize: 18,
//         paddingLeft: 15
//     }
// };

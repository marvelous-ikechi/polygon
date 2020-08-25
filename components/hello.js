import React from 'react';
import {TextInput, View, Text} from 'react-native'
import Poly from 'react-svg-polygon'

const Shapes = () => {
    const [x_value, onChange_x] = React.useState(0);
    const [y_value, onChange_y] = React.useState(0)

    return (
        <View>
            <Text>X Value</Text><TextInput
            style={{height: 40, borderColor: 'gray', borderWidth: 1}}
            onChangeText={text => text <= 9 ? onChange_x(text) :
                null}
            value={x_value}
        />
            <Text>Y value</Text>
            <TextInput
                style={{height: 40, borderColor: 'gray', borderWidth: 1}}
                onChangeText={text => text <= 9 ? onChange_y(text) :
                    null
                }
                value={y_value}
            />
            <Text>Sum: {Number(x_value) + Number(y_value)}</Text>

            <Poly
                sides={Number(x_value) + Number(y_value)}
                cx={50}
                cy={50}
                width={100}
                height={100}
                r={30}
                stroke={"red"}
            />
        </View>

    )
}

export default Shapes
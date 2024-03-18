import { Image, Pressable, Text, View } from "react-native"

const renderLeft = () => {
    return (
        leftComponent || (
            <View>
                {iconLeft ? (
                    <Pressable hitSlop={15} onPress={onPressLeft || Navigatior.goback}>
                        <Image source={iconLeft}
                            tintColor={iconLeftColor}
                        />
                    </Pressable>
                ) : (
                    <View style={{ width: leftIconSize, height: leftIconSize }} />
                )}
                /</View>
        )
    );
};

const renderCenter = () => {
    return (
        centerComponent || (
            <View style ={styles.containerCenter}>
                <Text style={styles.title} numberOfLines={numberOfLines}>
                    {title}
                </Text>
            </View>
        )
    );
};

const renderRight = () => {
    return (
        rightComponent
    )
}
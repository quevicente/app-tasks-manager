import React, { useState, useEffect } from 'react';
import { StyleSheet, Modal, View, TouchableOpacity, Text } from 'react-native';
import { Avatar } from 'react-native-elements'

export const ModalDetails = ({ visible, onClose }) => {
    return (
        <Modal
            transparent
            animationType='slide'
            visible={visible}
            onRequestClose={onClose}
        >

            <View style={styles.container}>
                <View style={styles.body} onTouchStart={onClose}></View>
            
                <View style={styles.header}>
                    <Avatar rounded title='V' />

                    <View style={styles.userDetails}>
                        <Text style={styles.userName}>Vicente Patricio</Text>
                        <Text >vicente@vicente.com</Text>
                    </View>
                </View>

                <View style={styles.content}>
                    <TouchableOpacity style={styles.done} >
                        <Text>Minhas tarefas</Text>
                    </TouchableOpacity>
                    <View style={styles.line}></View>
                    <TouchableOpacity style={styles.createList}>
                        <Text>Criar Lista</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </Modal >
    )
}

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-end',
        alignItems: 'center',
        height: '100%',
        width: '100%'
    },
    header: {
        display: 'flex',
        flexDirection: 'row',
        backgroundColor: 'white',
        padding: 10,
        alignItems: 'center',
        width: '100%',
        borderBottomWidth: 1,
        borderBottomColor: 'lightgray'
    },
    userDetails: {
        marginLeft: 10
    },
    userName: {
        fontWeight: 'bold'
    },
    body: {
        width: '100%',
        height: '100%',
        backgroundColor: 'rgba(0,0,0,0.4)'
    },
    content: {
        backgroundColor: 'white',
        padding: 10,
        width: '100%'
    },
    line: {
        borderTopWidth: 1,
        borderColor: 'lightgray'
    },
    done: {
        padding: 10,
        margin: 10
    },
    createList: {
        padding: 10,
        margin: 10
    }
});
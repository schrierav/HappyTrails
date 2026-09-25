import * as ImagePicker from 'expo-image-picker';
import { useState } from 'react';
import { Button, Image, StyleSheet, Text, TextInput, View } from 'react-native';

export default function ImageDemo() {
  const [image, setImage] = useState<ImagePicker.ImagePickerAsset | null>(null);
  const [note, setNote] = useState('');
  async function pickImage() {
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ['images'],
      quality: 1,
    });

    if (!result.canceled) {
      setImage(result.assets[0]);
    }
  }

  return (
    <View style={styles.container}>
      <Button title="Choose photo" onPress={pickImage} />

      {image && (
        <>
          <Image
            source={{ uri: image.uri }}
            style={styles.preview}
          />

          <Text>{image.fileName ?? 'Unknown filename'}</Text>
          <Text>
            {image.width} × {image.height}
          </Text>
        <TextInput
            style={styles.textBox}
            placeholder="Write something about this photo..."
            value={note}
            onChangeText={setNote}
            multiline
          />
          </>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    justifyContent: 'center',
    gap: 16,
  },
  preview: {
    width: '100%',
    height: 300,
    resizeMode: 'contain',
  },
  textBox: {
    height: 100,
    borderColor: 'gray',
    borderWidth: 1,
    padding: 8,
  },
});
import {
  BottomSheetModal,
  BottomSheetModalProvider,
  BottomSheetView,
} from '@gorhom/bottom-sheet';
import {useNavigation} from '@react-navigation/native';
import {Colors, Fonts} from '@src/styles';
import React, {useCallback, useMemo, useRef, useState} from 'react';
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import BottomSheetChapter from '../app/BookDetails/Components/BottomSheetChapter';

const ChapterScreen = () => {
  const navigation = useNavigation();
  const bottomSheetRef = useRef<BottomSheetModal>(null);
  const snapPoints = useMemo(() => ['40%'], ['70%']);
  const [darkMode, setDarkMode] = useState(false);
  const [bgColor, setBgColor] = useState(Colors.black);
  const [font, setFont] = useState(Fonts.regular);
  const [fontSize, setFontSize] = useState(14);
  const readBookRef = useRef<BottomSheetModal>(null);

  const handleOpenReadBookModal = useCallback(() => {
    readBookRef.current?.present();
  }, []);

  const chapters = [
    {title: 'Đừng bắt tôi suy nghĩ'},
    {title: 'Cách người dùng sử dụng trang Web trên thực tế'},
    {title: 'Usability testing quan trọng, chỉ 1k cần'},
    {title: 'Usability testing quan trọng, chỉ 1k cần'},
    {title: 'Usability testing quan trọng, chỉ 1k cần'},
    {title: 'Usability testing quan trọng, chỉ 1k cần'},
    {title: 'Usability testing quan trọng, chỉ 1k cần'},
  ];

  return (
    <BottomSheetModalProvider>
      <View
        style={{
          flex: 1,
          backgroundColor: !darkMode
            ? Colors.white
            : bgColor
            ? bgColor
            : Colors.black,
        }}>
        <View style={styles.header}>
          <TouchableOpacity
            onPress={() => {
              navigation.goBack();
            }}>
            <Ionicons
              name="chevron-back"
              size={32}
              color={darkMode ? Colors.white : Colors.black}
            />
          </TouchableOpacity>
          <View style={{flex: 1, marginLeft: 4}}>
            {/* titlesach */}
            <Text
              style={[
                styles.title,
                {
                  color: darkMode ? Colors.white : Colors.primary2,
                  fontFamily: font,
                },
              ]}>
              Chương 2
            </Text>
            <Text
              style={[
                styles.textChapter,
                {
                  color: darkMode ? Colors.white : Colors.primary2,
                  fontFamily: font,
                },
              ]}>
              Chương 2: Đừng bắt tôi suy nghĩ
            </Text>
          </View>
          <TouchableOpacity
            onPress={() => {
              bottomSheetRef.current?.present();
            }}>
            <Ionicons
              name="menu"
              size={32}
              color={darkMode ? Colors.white : Colors.black}
            />
          </TouchableOpacity>
        </View>
        <ScrollView style={styles.container}>
          <View style={{flex: 1, marginBottom: 20}}>
            <Text
              style={[
                styles.titleChapter,
                {
                  color: darkMode ? Colors.white : Colors.primary2,
                  fontFamily: font,
                },
              ]}>
              Chương 2
            </Text>
            <Text
              style={[
                styles.text,
                {
                  color: darkMode ? Colors.white : Colors.primary2,
                  fontFamily: font,
                },
              ]}>
              Đừng bắt tôi suy nghĩ
            </Text>
          </View>

          {/* Content */}
          <View style={styles.content}>
            <Text
              selectable
              style={[
                styles.paragraph,
                {
                  color: darkMode ? Colors.white : Colors.black,
                  fontFamily: font,
                  fontSize: fontSize,
                },
              ]}>
              Trên tất cả những lần tôi xem người ta sử dụng sản phẩm, thứ làm
              tôi chú ý nhất chính là sự khác biệt giữa cách chúng ta nghĩ người
              dùng sẽ sử dụng Website và cách họ sử dụng Website trên thực tế.
              Khi chúng ta tạo ra Website, ta hành động như thể mọi người sẽ xem
              từng trang một, đọc tất cả các đoạn text được căn chỉnh cẩn thận,
              tìm ra cách ta tổ chức mọi thứ và cân nhắc các lựa chọn trước khi
              quyết định nhấp vào 1 cái link nào. Những gì họ thực sự làm (nếu
              chúng tôi may mắn) đó là lướt qua từng trang mới, đọc qua loa một
              số đoạn text và nhấp vào cái link đầu tiên mà họ thấy hay hay hoặc
              giống giống với thứ họ cần. Lúc nào cũng sẽ có 1 phần to đùng của
              trang web mà họ thậm chí còn chả thèm để mắt tới. Sự thật #1:
              Chúng ta không đọc các trang web, chúng ta chỉ lướt mắt qua chúng
              thôi (scanning). Trên tất cả những lần tôi xem người ta sử dụng
              sản phẩm, thứ làm tôi chú ý nhất chính là sự khác biệt giữa cách
              chúng ta nghĩ người dùng sẽ sử dụng Website và cách họ sử dụng
              Website trên thực tế. Khi chúng ta tạo ra Website, ta hành động
              như thể mọi người sẽ xem từng trang một, đọc tất cả các đoạn text
              được căn chỉnh cẩn thận, tìm ra cách ta tổ chức mọi thứ và cân
              nhắc các lựa chọn trước khi quyết định nhấp vào 1 cái link nào.
              Những gì họ thực sự làm (nếu chúng tôi may mắn) đó là lướt qua
              từng trang mới, đọc qua loa một số đoạn text và nhấp vào cái link
              đầu tiên mà họ thấy hay hay hoặc giống giống với thứ họ cần. Lúc
              nào cũng sẽ có 1 phần to đùng của trang web mà họ thậm chí còn chả
              thèm để mắt tới. Sự thật #1: Chúng ta không đọc các trang web,
              chúng ta chỉ lướt mắt qua chúng thôi (scanning).
            </Text>
          </View>

          {/* Footer */}
        </ScrollView>
      </View>
      <BottomSheetModal
        ref={bottomSheetRef}
        index={0}
        snapPoints={snapPoints}
        backgroundStyle={styles.modal}>
        <BottomSheetView style={styles.contentsheet}>
          {/* Chế độ sáng/tối */}
          <Text style={styles.sectionTitle}>Chế độ sáng / tối</Text>
          <View style={styles.row}>
            <TouchableOpacity
              style={[
                styles.option,
                !darkMode && styles.activeOption,
                {width: '46%'},
              ]}
              onPress={() => setDarkMode(false)}>
              <MaterialIcons name="light-mode" size={24} color={Colors.gold} />
            </TouchableOpacity>
            <TouchableOpacity
              style={[
                styles.option,
                darkMode && styles.activeOption,
                {width: '46%'},
              ]}
              onPress={() => setDarkMode(true)}>
              <MaterialIcons name="mode-night" size={24} color={Colors.white} />
            </TouchableOpacity>
          </View>

          {/* Màu nền */}
          <Text style={styles.sectionTitle}>Màu nền</Text>
          <View style={styles.row}>
            {['#000', '#1b3a4b', '#5c4426', '#4a3d2f'].map(color => (
              <TouchableOpacity
                key={color}
                style={[
                  styles.colorOption,
                  {backgroundColor: color},
                  bgColor === color && styles.activeColor,
                ]}
                onPress={() => setBgColor(color)}>
                <Text style={styles.colorText}>Aa</Text>
              </TouchableOpacity>
            ))}
          </View>

          {/* Font chữ */}
          <Text style={styles.sectionTitle}>Font chữ</Text>
          <View style={styles.row}>
            {[Fonts.regular, 'monospace', 'sans-serif', 'serif'].map(f => (
              <TouchableOpacity
                key={f}
                style={[styles.option, font === f && styles.activeOption]}
                onPress={() => {
                  setFont(f);
                }}>
                <Text style={{fontFamily: f}}>{f}</Text>
              </TouchableOpacity>
            ))}
          </View>

          {/* Cỡ chữ */}
          <Text style={styles.sectionTitle}>Cỡ chữ</Text>
          <View style={styles.row}>
            <TouchableOpacity
              style={styles.option}
              onPress={() => setFontSize(fontSize - 1)}>
              <Text>Aa-</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.option}
              onPress={() => setFontSize(fontSize + 1)}>
              <Text>Aa+</Text>
            </TouchableOpacity>
          </View>
        </BottomSheetView>
      </BottomSheetModal>
    </BottomSheetModalProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 18,
    color: Colors.primary2,
  },
  text: {
    fontFamily: Fonts.bold,
    fontSize: 16,
    color: Colors.primary2,
    textAlign: 'center',
  },
  textChapter: {
    fontFamily: Fonts.regular,
    fontSize: 12,
    color: Colors.black45,
  },
  header: {
    marginBottom: 20,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 18,
    paddingTop: 18,
  },
  content: {
    marginBottom: 20,
  },
  contentsheet: {
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  paragraph: {
    marginBottom: 10,
  },
  footer: {
    alignItems: 'center',
    paddingVertical: 10,
    borderTopWidth: 1,
    borderTopColor: '#eee',
  },
  footerText: {
    fontSize: 14,
    color: '#888',
  },
  titleChapter: {
    fontFamily: Fonts.bold,
    fontSize: 28,
    color: Colors.primary2,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  button: {
    padding: 10,
    backgroundColor: '#007AFF',
    borderRadius: 8,
    alignItems: 'center',
    margin: 20,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
  },
  modal: {
    backgroundColor: Colors.bgcolor,
    padding: 20,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: Colors.primary2,
    marginBottom: 8,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 15,
  },
  option: {
    padding: 10,
    backgroundColor: Colors.silver,
    borderRadius: 8,
    alignItems: 'center',
  },
  activeOption: {
    backgroundColor: Colors.primary2,
  },
  colorOption: {
    width: '20%',
    height: 40,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  activeColor: {
    borderWidth: 2,
    borderColor: '#fff',
  },
  colorText: {
    color: '#fff',
  },
});

export default ChapterScreen;

import {BottomSheetModal, BottomSheetView} from '@gorhom/bottom-sheet';
import {Colors, Fonts} from '@src/styles';
import {ForwardedRef, forwardRef, useCallback, useMemo, useRef} from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';
export type Ref = BottomSheetModal;

interface Props {
  title?: string;
  filterArray: any[];
  ref: ForwardedRef<BottomSheetModal<any>> | undefined;
}
const BottomSheetChapter = forwardRef<BottomSheetModal, Props>(
  ({title, filterArray}, ref) => {
    const snapPoints = useMemo(() => ['50%', '70%'], []);

    return (
      <BottomSheetModal snapPoints={snapPoints} index={0} ref={ref}>
        <BottomSheetView style={styles.contentContainer}>
          <Text style={styles.title}>{title}</Text>
          {filterArray.map((genre: any, index: any) => (
            <TouchableOpacity
              key={index}
              style={[styles.genreItem]}
              onPress={() => {}}>
              <Text style={[styles.genreText]}>{genre.title}</Text>
            </TouchableOpacity>
          ))}
          <TouchableOpacity
            style={[styles.genreItem]}
            onPress={() => ref?.current?.dismiss()}>
            <Text style={[styles.genreText, {color: 'red'}]}>Hủy</Text>
          </TouchableOpacity>
        </BottomSheetView>
      </BottomSheetModal>
    );
  },
);
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    justifyContent: 'center',
    backgroundColor: 'grey',
  },
  contentContainer: {
    flex: 1,
    alignItems: 'center',
  },
  title: {
    fontSize: 18,
    fontFamily: Fonts.bold,
    marginBottom: 10,
    color: Colors.black333,
  },
  genreItem: {
    paddingVertical: 10,
    width: '100%',
    alignItems: 'center',
  },
  genreText: {
    fontSize: 16,
  },
});
export default BottomSheetChapter;

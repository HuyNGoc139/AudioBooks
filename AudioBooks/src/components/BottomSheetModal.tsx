import {BottomSheetModal, BottomSheetView} from '@gorhom/bottom-sheet';
import {Colors, Fonts} from '@src/styles';
import {ForwardedRef, forwardRef, useCallback, useMemo, useRef} from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';
export type Ref = BottomSheetModal;

interface Props {
  title: string;
  filterArray: any[];
  onSelectGenre?: (item: any) => void;
  ref: ForwardedRef<BottomSheetModal<any>> | undefined;
  selected?: any;
}
const CustomBottomSheetModal = forwardRef<BottomSheetModal, Props>(
  ({title, filterArray, onSelectGenre, selected}, ref) => {
    const snapPoints = useMemo(() => ['50%', '70%'], []);

    return (
      <BottomSheetModal snapPoints={snapPoints} index={0} ref={ref}>
        <BottomSheetView style={styles.contentContainer}>
          <Text style={styles.title}>{title}</Text>
          {filterArray.map((genre: any, index: any) => (
            <TouchableOpacity
              key={index}
              style={[
                styles.genreItem,
                {backgroundColor: selected === genre ? Colors.primary : ''},
              ]}
              onPress={() => onSelectGenre?.(genre)}>
              <Text
                style={[
                  styles.genreText,
                  {color: selected === genre ? Colors.white : Colors.black},
                ]}>
                {genre}
              </Text>
            </TouchableOpacity>
          ))}
          <TouchableOpacity
            style={styles.genreItem}
            onPress={() => onSelectGenre?.('')}>
            <Text style={styles.genreText}>Hủy</Text>
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
export default CustomBottomSheetModal;

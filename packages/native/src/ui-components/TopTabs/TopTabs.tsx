import React, {useEffect, useRef} from 'react'
import {FlatList, View, ListRenderItemInfo} from 'react-native'

import Tab from './Tab'
import styles from './styles'
import {Tab as TabType} from './types'
import {weeks} from '../../helpers/generateWeeks'

interface Props {
  activeIndex: number
  setActiveIndex: (tab: TabType) => void
}

function TopTabs({activeIndex, setActiveIndex}: Props) {
  const listRef = useRef<FlatList<TabType>>(null)

  useEffect(() => {
    scrollToIndex()
  })

  const scrollToIndex = () => {
    listRef?.current?.scrollToIndex({
      animated: true,
      index: activeIndex - 1
    })
  }

  const renderItem = ({item, index}: ListRenderItemInfo<TabType>) => {
    return (
      <Tab
        key={item.index}
        week={item.weekName}
        tabIndex={index}
        onPress={() => setActiveIndex(item)}
        isActive={activeIndex === item.index}
      />
    )
  }

  const getItemLayout = (_: any, index: number) => ({
    length: 120,
    offset: 120 * index,
    index
  })

  return (
    <View style={styles.container}>
      <FlatList
        ref={listRef}
        data={weeks()}
        horizontal={true}
        renderItem={renderItem}
        getItemLayout={getItemLayout}
        showsHorizontalScrollIndicator={false}
        keyExtractor={(_, index) => String(index)}
      />
    </View>
  )
}

export default TopTabs

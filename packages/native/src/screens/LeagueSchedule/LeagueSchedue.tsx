import React, {useState} from 'react'
import {View, Clipboard} from 'react-native'
import {ActivityIndicator, IconButton, Snackbar} from 'react-native-paper'

import styles from './styles'
import {colors} from '../../theme'
import {TopTabs, ScheduleList, HeaderTitle, Dialog} from '../../ui-components'
import {Tab as TabType} from '../../ui-components/TopTabs/types'
import {getCurrentSeason} from '../../helpers/getCurrentSeason'
import {useLocalLeagueIdQuery, useWeeklyScheduleQuery, useUpsertPredictionMutation, usePredictionsForWeekQuery} from "../../generated/hooks"
import {WeeklySchedule, Prediction} from "../../generated/types"

// temp
const initialActiveTab = {weekName: "Divisional", stage: "POST", weekNumber: 4, index: 21}

// todo: navigation types
function LeagueSchedule({navigation, route}: any) {
  const {data: localData} = useLocalLeagueIdQuery()
  const [dialogVisible, setDialogVisible] = useState(false)
  const [snackVisible, setSnackVisible] = useState(false)
  const [activeTab, setActiveTab] = useState<TabType>(initialActiveTab)
  const [isMatchUpdating, setIsMatchUpdating] = useState<string | null>(null)

  const league = route?.params?.league

  const [upsetPrediction] = useUpsertPredictionMutation()

  const {
    refetch,
    data: scheduleData,
    networkStatus,
    loading: scheduleLoading
  } = useWeeklyScheduleQuery({
    variables: {
      season: `${getCurrentSeason()}${activeTab.stage}`,
      week: activeTab.weekNumber.toString()
    },
    fetchPolicy: 'cache-first',
    notifyOnNetworkStatusChange: true
  })

  const {data: predictionData, loading: predictionsLoading} = usePredictionsForWeekQuery({
    variables: {
      leagueId: localData?.leagueId!,
      season: "2019",
      stage: activeTab.stage,
      week: activeTab.weekNumber
    }
  })

  function handlePrediction(gameKey: string, predictedWinner: number) {
    const game = scheduleData?.weeklySchedule!.find(
      // todo: fix data type
      (data: WeeklySchedule) => data.gameKey === gameKey
    )

    // if (game?.status === 'Final') {
    //   return null
    // }

    setIsMatchUpdating(gameKey)

    const variables = {
        gameKey,
        leagueId: localData?.leagueId!,
        season: "2019",
        predictedWinner,
        week: activeTab.weekNumber,
        stage: activeTab.stage
    }

    upsetPrediction({variables}).then(() => {
      setIsMatchUpdating(null)
    })
  }

  const isLoading = () => {
    return (scheduleLoading && networkStatus !== 4) || predictionsLoading || networkStatus === 1
  }

  const isFetching = () => {
    return networkStatus === 4
  }

  navigation.setOptions({
    headerStyle: {
      backgroundColor: colors.nfl.primary,
      shadowRadius: 0,
        shadowOffset: {
        height: 0,
      }
    },
    headerTitle: () => {
      return <HeaderTitle title={league.name} />
    },
    headerLeft: () => {
      return <IconButton icon="home" color={colors.white} onPress={() => navigation.navigate("MyLeagues")} />
    },
    headerRight: () => {
      return <IconButton icon="settings" color={colors.white} onPress={() => setDialogVisible(true)} />
    }
  })

  const handleCloseDialog = () => {
    setDialogVisible(false)
  }

  const handleCopyCode = () => {
    Clipboard.setString(league.accessCode)
    setDialogVisible(false)
    setTimeout(() => {
      setSnackVisible(true)
    }, 500)
  }

  return (
    <View style={styles.container}>
      {isLoading() && <ActivityIndicator size="large" style={styles.loading} />}
      {!isLoading() && scheduleData?.weeklySchedule && (
        <ScheduleList
          refetch={refetch}
          isMatchUpdating={isMatchUpdating}
          predictions={predictionData?.predictionsForWeek as Prediction[] || []}
          onPrediction={handlePrediction}
          games={scheduleData?.weeklySchedule!}
          isFetching={isFetching()}
        />
      )}
      <TopTabs activeIndex={activeTab.index} setActiveIndex={setActiveTab} />
      <Dialog
        visible={dialogVisible}
        onClose={handleCloseDialog}
        title={league.name}
        code={league.accessCode}
        onCopyCode={handleCopyCode}
      />
      <Snackbar
        visible={snackVisible}
        onDismiss={() => setSnackVisible(false)}
        action={{label: 'Close', onPress: () => setSnackVisible(false)}}>
        Code copied to clipboard
      </Snackbar>
    </View>
  )
}

export default LeagueSchedule


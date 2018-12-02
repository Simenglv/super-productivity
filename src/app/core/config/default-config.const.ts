import { GlobalConfig } from './config.model';

const minute = 60 * 1000;
export const DEFAULT_CFG: GlobalConfig = {
  misc: {
    isMinimizeToTrayOnExit: false,
    isConfirmBeforeExit: false,
    isNotifyWhenTimeEstimateExceeded: false,
    isBlockFinishDayUntilTimeTimeTracked: false,
    isOnlyOpenIdleWhenCurrentTask: false,
    isEnableIdleTimeTracking: true,
    minIdleTime: 5 * minute,
    isTakeABreakEnabled: false,
    /* tslint:disable-next-line */
    takeABreakMessage: 'Take a break! You have been working for ${duration} without one. Go away from the computer! Take a short walk! Makes you more productive in the long run!',
    takeABreakMinWorkingTime: 60 * minute,
  },
  pomodoro: {
    isEnabled: true,
    duration: 45 * minute,
    breakDuration: 5 * minute,
    longerBreakDuration: 15 * minute,
    cyclesBeforeLongerBreak: 4,
    isStopTrackingOnBreak: true,
    isStopTrackingOnLongBreak: true,
    isShowDistractionsOnBreak: true,
    isManualContinue: false,
    isPlaySound: true,
    isGoToWorkView: false,
    isPlayTick: false,
  },
  keyboard: {
    globalShowHide: 'Ctrl+Shift+X',
    addNewTask: 'Shift+A',
    addNewNote: 'n',
    openProjectNotes: 'N',
    openDistractionPanel: 'D',
    showHelp: '?',
    toggleBacklog: 'b',
    goToWorkView: 'w',
    goToDailyAgenda: '',
    goToFocusMode: 'F',
    goToSettings: '',
    focusLastActiveTask: 'f',
    taskEditTitle: 'e',
    taskToggleAdditionalInfoOpen: 'n',
    taskOpenEstimationDialog: 't',
    taskToggleDone: 'd',
    taskAddSubTask: 'a',
    taskDelete: 'Delete',
    selectPreviousTask: 'k',
    selectNextTask: 'j',
    moveTaskUp: 'Ctrl+Shift+ArrowUp',
    moveTaskDown: 'Ctrl+Shift+ArrowDown',
    moveToBacklog: 'B',
    moveToTodaysTasks: 'T',
    expandSubTasks: '',
    collapseSubTasks: '',
    togglePlay: 'y',
  },
  googleDriveSync: {
    isEnabled: false,
    isAutoLogin: false,
    isAutoSyncToRemote: false,
    isNotifyOnSync: false,
    isLoadRemoteDataOnStartup: false,
    syncInterval: minute,
    syncFileName: 'SUPER_PRODUCTIVITY_SYNC.json',
    _lastLocalUpdate: null,
    _lastSyncToRemote: null,
    _lastSyncFromRemote: null,
    _backupDocId: null,
  },
  _uiHelper: {
    _zoomFactor: 1,
  },
  _googleSession: {
    accessToken: null,
    refreshToken: null,
    expiresAt: null
  },
};

import {createContext, useContext, useState} from "react";
import dummyData from '../../data.json'

export const DataContext = createContext()

export const DataProvider = ({ children }) => {
  const [data, setData] = useState({
    initialVideos: dummyData.videos,
    filteredVideos: dummyData.videos,
    selectedIds: [],
    isAllSelected: true
  })

  const handleChangeVideos = (videoId) => {
    let _selectedIds = [...data.selectedIds]
    if (videoId) {
      if (_selectedIds.includes(videoId)) {
        _selectedIds = _selectedIds.filter(id => id !== videoId)
      } else {
        _selectedIds.push(videoId)
      }
    } else {
      _selectedIds = []
    }
    let _videos = [...dummyData.videos]
    if (_selectedIds.length > 0) {
      _videos = dummyData.videos.filter(video => _selectedIds.includes(video.id))
    }
    setData({
      ...data,
      filteredVideos: _videos,
      selectedIds: _selectedIds
    })
  }

  const handleIsAllSelected = (isChecked) => {
    setData({
      ...data,
      isAllSelected: isChecked
    })
  }

  const functions = {
    handleChangeVideos,
    handleIsAllSelected
  }

  return (
    <DataContext.Provider value={[data, functions]}>
      {children}
    </DataContext.Provider>
  )
}

/**
 * Hook to get and update configs state
 */
 export const useData = () => {
  const dataManager = useContext(DataContext)
  return dataManager || [{}, async () => {}]
}

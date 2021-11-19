import React, { useState } from 'react'
import Accordion from '../../Shared/Accordion'
import { LeftSideBarContainer } from './styles'
import SortIcon from '../../../assets/images/sort-icon.svg'
import FilterIcon from '../../../assets/images/filter-icon.svg'
import CheckBox from '../../Shared/CheckBox'
import FilterItem from '../../Shared/FilterItem'
import MobileFilterShowButton from '../../Shared/MobileFilterShowButton'
import { useWindowSize } from '../../../hooks/useWindowSize'
import RangeSlider from '../../Shared/RangeSlider'
import TransparentModal from '../../Shared/TransparentModal'
import { useData } from '../../../contexts/DataContext'

export const LeftSideBar = () => {
  const [
    { initialVideos, selectedIds }, 
    { handleChangeVideos }
  ] = useData();
  const windowSize = useWindowSize();

  const [searchName, setSearchName] = useState('');
  const [collectionList, setCollectionList] = useState(initialVideos);
  const [isShow, setIsShow] = useState(false);
  const [priceIds, setPriceIds] = useState([]);
  const [currencyIds, setCurrencyIds] = useState([]);
  const [statusIds, setStatusIds] = useState([]);

  const defaultPriceList = [
    { id: 1, name: 'Lowest price: ascending' },
    { id: 2, name: 'Lowest price: decending' }
  ]

  const defaultCurrencyList = [
    { id: 1, name: 'ERN' },
    { id: 2, name: 'WETH' }
  ]

  const defaultStatusList = [
    { id: 1, name: 'Buy now' },
    { id: 2, name: 'Latest' },
    { id: 3, name: 'On Auction' },
    { id: 4, name: 'Top Sellers' }
  ]

  const handleChangePriceIds = (id) => {
    let _priceIds = []
    const found = priceIds.find(priceId => priceId === id)
    if (found) {
      _priceIds = priceIds.filter(priceId =>priceId !== id)
    } else {
      _priceIds = [...priceIds]
      _priceIds.push(id)
    }
    setPriceIds(_priceIds)
  }

  const handleChangeCurrencyIds = (id) => {
    let _currencyIds = []
    const found = currencyIds.find(currencyId => currencyId === id)
    if (found) {
      _currencyIds = currencyIds.filter(currencyId => currencyId !== id)
    } else {
      _currencyIds = [...currencyIds]
      _currencyIds.push(id)
    }
    setCurrencyIds(_currencyIds)
  }

  const handleChangesStatusIds = (id) => {
    let _statusIds = []
    const found = statusIds.find(statusId => statusId === id)
    if (found) {
      _statusIds = statusIds.filter(statusId => statusId !== id)
    } else {
      _statusIds = [...statusIds]
      _statusIds.push(id)
    }
    setStatusIds(_statusIds)
  }

  const handleSearch = (e) => {
    let keyWord = e.target.value;
    setSearchName(keyWord);
    if(!keyWord){
      setCollectionList(initialVideos);
      return;
    }
    let _searchedCollectionList = initialVideos.filter(video => video.title.toUpperCase().includes(keyWord.toUpperCase()));
    setCollectionList(_searchedCollectionList);
  };

  const clearFilter = () => {};

  const renderMainContent = () => {
    return (
      <>
        <Accordion title="Sort By" iconUrl={SortIcon}>
          <div>
            {defaultPriceList.map(price => (
              <CheckBox
                key={price.id}
                id={price.id}
                label={price.name}
                isChecked={priceIds.includes(price.id)}
                onChange={val => handleChangePriceIds(val)}
              />
            ))}
          </div>
        </Accordion>
        <Accordion title="Filters" iconUrl={FilterIcon}>
          <div>
            <div className="total-result">{'999'} Results</div>
            <FilterItem title={'CURRENCY'}>
              {defaultCurrencyList.map(currency => (
                <CheckBox
                  key={currency.id}
                  id={currency.id}
                  label={currency.name}
                  isChecked={currencyIds.includes(currency.id)}
                  onChange={val => handleChangeCurrencyIds(val)}
                />
              ))}
            </FilterItem>
            <FilterItem title={'PRICE RANGE'} isFullWidth={true}>
              <div className="slider-div">
                <RangeSlider
                  min={0}
                  max={1000}
                  onChange={({ min, max }) => null}
                />
              </div>
            </FilterItem>
            <FilterItem title={'STATUS'}>
              {defaultStatusList.map(status => (
                <CheckBox
                  key={status.id}
                  id={status.id}
                  label={status.name}
                  isChecked={statusIds.includes(status.id)}
                  onChange={val => handleChangesStatusIds(val)}
                />
              ))}
            </FilterItem>
            <FilterItem title={'COLLECTIONS'} isFullWidth={true}>
              <input 
                className="collection-search" 
                placeholder="Search..."
                value={searchName} 
                onChange={(e) => handleSearch(e)}
              />
              <div className="collection-list">
                <CheckBox
                  label={'All collections'}
                  id={null}
                  isChecked={selectedIds.length === 0}
                  onChange={val => handleChangeVideos(val)}
                />
                {collectionList.map(item => (
                  <CheckBox
                    key={item.id}
                    label={item.title}
                    id={item.id}
                    isChecked={selectedIds.includes(item.id)}
                    onChange={val => handleChangeVideos(val)}
                  />
                ))}
              </div>
            </FilterItem>
            <div className="clear-filter" onClick={() => clearFilter()}>Clear filters</div>
          </div>
        </Accordion>
      </>
    );
  };

  return (
    <>
      {windowSize.width >= 800 ? (
        <>
          <LeftSideBarContainer>
            {renderMainContent()}
          </LeftSideBarContainer>
        </>
      ) : (
        <>
          <MobileFilterShowButton handleClick={() => {setIsShow(true)}} />
          {isShow && (
            <TransparentModal handleClose={() => setIsShow(false)}>
              <div className="mobile-sidebar">
                {renderMainContent()}
              </div>
            </TransparentModal>
          )}
        </>
      )}
    </>
  );
};
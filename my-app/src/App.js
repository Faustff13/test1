import React, {useCallback, useEffect, useMemo, useState, useRef} from 'react';
import { useDispatch, useSelector } from "react-redux";
import { loadingRepositories, loading, loadingNextRepositories, searchRepositories } from "./Redux/actions";
import './App.scss'

function App() {
  const list = useSelector(state => state.data.list)
  const load = useSelector(state => state.data.loading)
  const error = useSelector(state => state.data.error)
  const search = useSelector(state => state.data.search)

  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(loadingRepositories())
    dispatch(loading())
  }, [dispatch])

  const listRepositories = useCallback(() => {
    if (list.length === 0) return

    if (error) return (
        <div>{error || 'error'}</div>
    )

    const newList = []

    list.forEach((value) => {
      newList.push(
          <div key={value.id} className='app__card'>
            <div className='app__card__login'>{value.owner.login}</div>
            <div className='app__card__name'>{value.name}</div>
            <div className='app__card__description'>{value.description}</div>
            <div className='app__card__full-name'>
              <div
                  className='app__card__full-name__button'
                  onClick={() => window.open(value.owner.html_url)}
              >
                {value.full_name}
              </div>
            </div>
          </div>
      )
    })
    return newList
  }, [list, error, load])

  const loadList = useCallback(() => {
    return (<div>loading</div>)
  }, [load, list, error])

  const loadingRef = useRef(null)

  const loadingNextRep = useCallback(() => {
    if (search) return

    if (loadingRef.current.scrollHeight - loadingRef.current.offsetHeight - 100 < loadingRef.current.scrollTop) {

      dispatch(loadingNextRepositories())
    }
  }, [dispatch])

  const handleSearch = useCallback((e) => {
    if (e.target.value === '') {
      dispatch(loadingRepositories())
    } else {
      dispatch(searchRepositories(e.target.value))
    }
  }, [dispatch])

  return (
      <>
        <div className='search'>
          <input type='text' placeholder='search' className='search__input' onChange={handleSearch}/>
        </div>
        <div className="app" onScroll={loadingNextRep} ref={loadingRef} >
          <div className='app__header'>
            <div className='app__header__login'>login</div>
            <div className='app__header__name' >name</div>
            <div className='app__header__description'>description</div>
            <div className='app__header__link'>link</div>
          </div>
          {load ? loadList() : listRepositories()}
        </div>
      </>
  );
}

export default App;

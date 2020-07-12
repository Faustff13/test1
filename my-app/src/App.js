import React, { useEffect, useMemo, useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { loadingRepositories, loading } from "./Redux/actions";

function App() {
  const list = useSelector(state => state.list)
  const loading = useSelector(state => state.loading)
  const error = useSelector(state => state.error)

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(loadingRepositories())
    dispatch(loading())
  }, [dispatch])

  // const listRepositories = useMemo(() => {
  //   const list
  //
  //   return
  // }, [list, error, loading])

  return (
    <div className="App">>
    </div>
  );
}

export default App;

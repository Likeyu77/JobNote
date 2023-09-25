import { FormRowSelect } from '.'
import Wrapper from '../assets/wrappers/SearchContainer'
import { useSelector, useDispatch } from 'react-redux'
import { handleChange, clearFilters, getAllJobs } from '../features/allJobs/allJobsSlice'
import { useState, useMemo } from 'react'




const SearchContainer = () => {
  const [localsearch, setLocalSearch] = useState('')
  const { isLoading, searchStatus, searchType, sort, sortOptions } = useSelector((store) => store.allJobs)
  const { jobTypeOptions, statusOptions } = useSelector((store) => store.job)
  const dispatch = useDispatch()

  const handleSearch = (e) => {

    dispatch(handleChange({ name: e.target.name, value: e.target.value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setLocalSearch('')
    dispatch(clearFilters())
  }

  // const debounce = () => {
  //   let timeoutID
  //   return (e) => {
  //     setLocalSearch(e.target.value)
  //     clearTimeout(timeoutID)
  //     timeoutID = setTimeout(() => {
  //       dispatch(handleChange({ name: e.target.name, value: e.target.value }))
  //     }, 1000)
  //   }
  // }

  const optimizedDebounce = useMemo(() => {
    let timeoutID
    return (e) => {
      setLocalSearch(e.target.value)
      clearTimeout(timeoutID)
      timeoutID = setTimeout(() => {
        dispatch(handleChange({ name: e.target.name, value: e.target.value }))
      }, 1000)
    }
  }, [dispatch])

  return (
    <Wrapper>
      <form className='form'>
        {/* postion */}

        <div className='search-input'>
          <h1>Search Job</h1>
          <input type='text' name='search' id='search'
            className='form-input'
            onChange={optimizedDebounce}
            value={localsearch}
            placeholder='Search by keyword '
          />
        </div>

        <p>Advanced Search:</p>

        <div className="form-center">

          {/* search status */}
          <FormRowSelect labelText='status' name='searchStatus' value={searchStatus}
            handleChange={handleSearch} list={['all', ...statusOptions]} />
          {/* type */}
          <FormRowSelect labelText='type' name='searchType' value={searchType}
            handleChange={handleSearch} list={['all', ...jobTypeOptions]} />
          {/* sort */}
          <FormRowSelect name='sort' value={sort}
            handleChange={handleSearch} list={sortOptions} />


        </div>

        <div className="btn-container">
          <button
            className="btn btn-block btn-danger"
            disabled={isLoading}
            onClick={handleSubmit}>
            clear filters
          </button>
          <button
            className="btn btn-block"
            disabled={isLoading}
            onClick={() => dispatch(getAllJobs())}>
            Search
          </button>
        </div>

      </form>
    </Wrapper>
  )
}

export default SearchContainer
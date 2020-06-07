import React, { useContext, useState } from 'react'
import { AlertContext } from '../context/alert/alertContext'
import { GithubContext } from '../context/github/githubContext'

export const Search = () => {
    const [value, setValue] = useState('')
    const alert = useContext(AlertContext)
    const gitHub = useContext(GithubContext)

    const onSubmit = event => {
        if (event.key !== 'Enter') {
            return null
        }

        gitHub.clearUsers()

        if (value.trim()) {
            alert.hide()
            gitHub.search(value.trim())
            
        } else {
            alert.show('Enter user data')
        }
    }

    return (
        <div className="form-group">
            <input 
                className="form-control"
                type="text"
                placeholder="Enter your name here"
                onKeyPress={onSubmit}
                value={value}
                onChange={event => setValue(event.target.value)}
            />
        </div>
    )
}

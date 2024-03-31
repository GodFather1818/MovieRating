import React from 'react'
import { useEffect, useState } from 'react';

export function useLocalStorage(initialState, key) {
    const [value, setValue] = useState(function () {
        const storedMovie = localStorage.getItem(key);
        return storedMovie? JSON.parse(storedMovie): initialState;
      });


      useEffect(
        function () {
          localStorage.setItem(key, JSON.stringify(value));
        },
        [value, key]
      );
      return [value, setValue]

}
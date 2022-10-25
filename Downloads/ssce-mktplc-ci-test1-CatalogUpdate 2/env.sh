#!/bin/bash

MKTPLC_DEPLOY=$MKTPLC_BASE/public/app

# Recreate config file
rm -rf $MKTPLC_DEPLOY/env-config.js
touch $MKTPLC_DEPLOY/env-config.js

# Add assignment 
echo "window._env_ = {" >> $MKTPLC_DEPLOY/env-config.js

_SEP=
# Read each line in .env file
# Each line represents key=value pairs
while read -r line || [[ -n "$line" ]];
do
  if [[ "${line}" =~ ^[[:space:]]*# ]] ; then
    # ignore commented lines
    continue;
  fi

  # Split env variables by character `=`
  if printf '%s\n' "$line" | grep -q -e '='; then
    varname=$(printf '%s\n' "$line" | sed -e 's/=.*//')
    varvalue=$(printf '%s\n' "$line" | sed -e 's/^[^=]*=//')
  else
    _SEP="${_SEP}\n"
    continue;
  fi

  # Read value of current variable if exists as Environment variable
  value=$(printf '%s\n' "${!varname}")
  # Otherwise use value from .env file
  [[ -z $value ]] && value=${varvalue}
  
  # Append configuration property to JS file
  echo -n -e "${_SEP}  $varname: \"$value\"" >> $MKTPLC_DEPLOY/env-config.js
  _SEP=",\n"
done < .env

echo -e "\n}" >> $MKTPLC_DEPLOY/env-config.js
#!/bin/bash
echo $1
qq="$(echo $1)"
echo "${qq}"
pid="$(lsof -i tcp:$1 -t)";
echo $pid
# kill -TERM $pid || kill -KILL $pid
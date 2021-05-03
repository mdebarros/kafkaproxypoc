#!/bin/bash

BASEDIR=$(dirname "$0")
cd ${BASEDIR}/../

# PROTO_JS_DEST=./dist/proto
PROTO_JS_DEST=./src/proto
PROTO_TS_DEST=./src/proto
PROTO_SOURCE=../../proto

mkdir -p ${PROTO_JS_DEST}
mkdir -p ${PROTO_TS_DEST}

# JavaScript code generation
yarn run grpc_tools_node_protoc \
    --js_out=import_style=commonjs,binary:${PROTO_JS_DEST} \
    --grpc_out=${PROTO_JS_DEST} \
    --plugin=protoc-gen-grpc=./node_modules/.bin/grpc_tools_node_protoc_plugin \
    -I ${PROTO_SOURCE} \
    ${PROTO_SOURCE}/*.proto

# TypeScript code generation
yarn run grpc_tools_node_protoc \
    --plugin=protoc-gen-ts=./node_modules/.bin/protoc-gen-ts \
    --ts_out=${PROTO_TS_DEST} \
    -I ${PROTO_SOURCE} \
    ${PROTO_SOURCE}/*.proto

const MSWebOptions = {
  Requests: false,
  BytesReceived: true,
  BytesSent: true,
  Http101: false,
  Http2xx: false,
  Http3xx: false,
  Http401: false,
  Http403: false,
  Http404: false,
  Http406: false,
  Http4xx: true,
  Http5xx: true,
  MemoryWorkingSet: false,
  AverageMemoryWorkingSet: false,
  AverageResponseTime: false,
  HttpResponseTime: false,
  FunctionExecutionUnits: true,
  FunctionExecutionCount: true,
  AppConnections: false,
  Handles: false,
  Threads: false,
  PrivateBytes: false,
  IoReadBytesPerSecond: false,
  IoWriteBytesPerSecond: false,
  IoOtherBytesPerSecond: false,
  RequestsInApplicationQueue: false,
  CurrentAssemblies: false,
  TotalAppDomains: false,
  TotalAppDomainsUnloaded: false,
  Gen0Collections: false,
  Gen1Collections: false,
  Gen2Collections: false,
  HealthCheckStatus: false,
  FileSystemUsage: false,
};

const MSStorageOptions = {
  UsedCapacity: false,
  Transactions: false,
  Ingress: false,
  Egress: false,
  SuccessServerLatency: false,
  SuccessE2ELatency: false,
  Availability: false,
};

const MSInsightsOptions = {
  availabilityResults: {
    count: false,
    duration: false,
  },
  browserTimings: {
    networkDuration: false,
    processingDuration: false,
    receiveDuration: false,
    sendDuration: false,
    totalDuration: false,
  },
  dependencies: {
    count: false,
    duration: false,
    failed: false,
  },
  pageViews: {
    count: false,
    duration: false,
  },
  performanceCounters: {
    requestExecutionTime: false,
    requestsInQueue: false,
    requestsPerSecond: false,
    exceptionsPerSecond: false,
    processIOBytesPerSecond: false,
    processCpuPercentage: false,
    processorCpuPercentage: false,
    memoryAvailableBytes: false,
    processPrivateBytes: false,
  },
  requests: {
    duration: true,
    count: false,
    failed: true,
    rate: false,
  },
  exceptions: {
    count: false,
    browser: false,
    server: false,
  },
  traces: {
    count: false,
  },
};

export { MSWebOptions, MSStorageOptions, MSInsightsOptions };
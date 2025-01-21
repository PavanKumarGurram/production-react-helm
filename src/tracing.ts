import { WebTracerProvider } from '@opentelemetry/sdk-trace-web';
import { BatchSpanProcessor } from '@opentelemetry/sdk-trace-base';
import { ZoneContextManager } from '@opentelemetry/context-zone';
import { OTLPTraceExporter } from '@opentelemetry/exporter-trace-otlp-http';
import { registerInstrumentations } from '@opentelemetry/instrumentation';
import { getWebAutoInstrumentations } from '@opentelemetry/auto-instrumentations-web';
import { Resource } from '@opentelemetry/resources';
import { SemanticResourceAttributes } from '@opentelemetry/semantic-conventions';

export function initTracing() {
  const provider = new WebTracerProvider({
    resource: new Resource({
      [SemanticResourceAttributes.SERVICE_NAME]: 'react-app',
      [SemanticResourceAttributes.SERVICE_VERSION]: '1.0.0',
    }),
  });

  const exporter = new OTLPTraceExporter({
    url: '/api/traces',
  });

  provider.addSpanProcessor(new BatchSpanProcessor(exporter));
  provider.register({
    contextManager: new ZoneContextManager(),
  });

  registerInstrumentations({
    instrumentations: [
      getWebAutoInstrumentations({
        '@opentelemetry/instrumentation-document-load': {},
        '@opentelemetry/instrumentation-user-interaction': {},
        '@opentelemetry/instrumentation-fetch': {},
        '@opentelemetry/instrumentation-xml-http-request': {},
      }),
    ],
  });
}